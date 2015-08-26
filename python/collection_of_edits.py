__author__ = 'arenduchintala'
import json

EN_LANG = 'en'
DE_LANG = 'de'
END = '*EN*'
START = '*ST*'


class Edge(dict):
    def __init__(self, from_id, to_id, direction):
        dict.__init__(self)
        self.__dict__ = self
        self.from_id = from_id
        self.to_id = to_id
        self.direction = direction

    def __str__(self):
        return self.direction + ',' + str(self.from_id) + '->' + str(self.to_id)

    @staticmethod
    def from_dict(dict_):
        e = Edge(dict_['from_id'], dict_['to_id'], dict_['direction'])
        return e


class Node(dict):
    def __init__(self, id, s, en_id, de_id, lang, visible, en_left=[], en_right=[], de_left=[], de_right=[],
                 to_en=False, to_de=True):
        dict.__init__(self)
        self.__dict__ = self
        self.id = id
        self.s = s
        self.en_id = en_id
        self.de_id = de_id
        self.lang = lang
        self.visible = visible
        self.en_left = en_left
        self.en_right = en_right
        self.de_left = de_left
        self.de_right = de_right
        self.graph = None
        self.er_lang = "en"
        self.to_en = to_en
        self.to_de = to_de

    def __eq__(self, other):
        return self.s == other.s and self.graph.id == other.graph.id and self.id == other.id

    def __str__(self):
        return str(self.id) + ',' + self.s

    @staticmethod
    def from_dict(dict_):
        """ Recursively (re)construct TreeNode-based tree from dictionary. """
        n = Node(dict_['id'], dict_['s'], dict_['en_id'], dict_['de_id'], dict_['lang'], dict_['visible'],
                 dict_['en_left'], dict_['en_right'], dict_['de_left'], dict_['de_right'], dict_['to_en'],
                 dict_['to_de'])
        return n


class Graph(dict):
    def __init__(self, id):
        dict.__init__(self)
        self.__dict__ = self
        self.id = id
        self.nodes = []
        self.edges = []
        self.ir = False
        self.er = False


    def __str__(self):
        return str(self.id) + ',' + ','.join([str(i) for i in self.nodes])

    def set_visibility(self):
        visiblity_dict = {}
        for n in self.nodes:
            neighbor = self.get_neighbor_nodes(n, 'en')
            if n.visible and len(neighbor) > 0:
                n.visible = False
                for ne in neighbor:
                    lst = visiblity_dict.get(ne.id, set([]))
                    lst.add(n.id)
                    visiblity_dict[ne.id] = lst
                    ne.visible = True

        while len(visiblity_dict) > 0:
            visiblity_dict = {}
            for n in self.nodes:
                neighbor = self.get_neighbor_nodes(n, 'en')
                if n.visible and len(neighbor) > 0:
                    n.visible = False
                    for ne in neighbor:
                        lst = visiblity_dict.get(ne.id, set([]))
                        lst.add(n.id)
                        visiblity_dict[ne.id] = lst
                        ne.visible = True
        return True


    def propagate_de_id(self):
        propagate_list = []
        for n in self.nodes:
            if n.de_id is not None:
                propagate_list.append(n)

        while len(propagate_list) < len(self.nodes):
            # print len(propagate_list)
            propagate_dict = {}
            for n in propagate_list:
                neighbors = self.get_neighbor_nodes(n, 'en')
                neighbors = [ne for ne in neighbors if ne.de_id is None]
                for ne in neighbors:
                    t = propagate_dict.get(ne.id, [])
                    t.append(n)
                    propagate_dict[ne.id] = t
            for n_id, nl in propagate_dict.items():
                n = self.get_node_by_id(n_id)
                n.de_id = nl[0].de_id

            propagate_list = []
            for n in self.nodes:
                if n.de_id is not None:
                    propagate_list.append(n)
        return True


    def propagate_de_order(self):
        propagate_list = []
        for n in self.nodes:
            if len(n.de_left) > 0 and len(n.de_right) > 0:
                propagate_list.append(n)

        while len(propagate_list) < len(self.nodes):

            propagate_dict = {}
            for n in propagate_list:
                neighbors = self.get_neighbor_nodes(n, 'en')
                neighbors = [ne for ne in neighbors if len(ne.de_left) == 0 and len(ne.de_right) == 0]
                for ne in neighbors:
                    t = propagate_dict.get(ne.id, [])
                    t.append(n)
                    propagate_dict[ne.id] = t
            for n_id, nl in propagate_dict.items():
                n = self.get_node_by_id(n_id)
                n.de_left = nl[0].de_left
                n.de_right = nl[0].de_right

            propagate_list = []
            for n in self.nodes:
                if len(n.de_left) > 0 and len(n.de_right) > 0:
                    propagate_list.append(n)
        return True


    def get_neighbor_nodes(self, node, direction):
        neighbor_nodes = []
        for e in self.edges:
            if e.direction == direction and e.from_id == node.id:
                neighbor_nodes.append(self.get_node_by_id(e.to_id))
        return neighbor_nodes


    def get_node_by_id(self, node_id):
        for n in self.nodes:
            if n.id == node_id:
                return n
        return None

    @staticmethod
    def from_dict(dict_):
        g = Graph(dict_['id'])
        g.er = dict_['er']
        g.nodes = list(map(Node.from_dict, dict_['nodes']))
        g.edges = list(map(Edge.from_dict, dict_['edges']))
        return g


class Sentence(dict):
    def __init__(self, id, en, de, alignment):
        dict.__init__(self)
        self.__dict__ = self
        self.id = id
        self.en = en
        self.de = de
        self.alignment = alignment
        self.graphs = []

    @staticmethod
    def from_dict(dict_):
        s = dict_['id']
        s.graphs = list(map(Sentence.from_dict, dict_['graphs']))
        return s


def get_edges(n1, n2):
    e1 = Edge(n1.id, n2.id, 'de')
    e2 = Edge(n2.id, n1.id, 'en')
    return [e1, e2]


if __name__ == '__main__':
    all_sent = []
    en = "please shut the door"
    de = "bitte mach die tur zu"
    alignment = "blank"
    g0 = Graph(0)
    n0 = Node(0, 'please', 0, 0, EN_LANG, True, [START], [1, 2, 2, END], [START], [1, 2, 2, 1, END], to_de=True,
              to_en=False)
    n1 = Node(1, 'bitte', 0, 0, DE_LANG, False, [START], [1, 2, 2, END], [START], [1, 2, 2, 1, END], to_de=False,
              to_en=True)
    g0.nodes = [n0, n1]
    g0.edges = get_edges(n0, n1)

    g1 = Graph(1)
    n0 = Node(0, 'shut', 0, 0, EN_LANG, True, [0, START], [2, 2, END], [0, START], [2, 2, END], to_de=True, to_en=False)
    n1 = Node(1, 'make', 0, 0, EN_LANG, False, [0, START], [1, 2, 2, END], [0, START], [2, 2, 1, END], to_de=True,
              to_en=True)
    n2 = Node(3, 'mach', 0, 0, DE_LANG, False, [0, START], [1, 2, 2, END], [0, START], [2, 2, 1, END], to_de=False,
              to_en=True)
    n3 = Node(2, 'close', 1, 1, EN_LANG, False, [1, 0, START], [2, 2, END], [2, 2, 1, 0, START], [END], to_de=True,
              to_en=True)
    n4 = Node(4, 'zu', 1, 1, DE_LANG, False, [1, 0, START], [2, 2, END], [2, 2, 1, 0, START], [END], to_de=False,
              to_en=True)
    g1.er = True
    g1.nodes = [n0, n1, n2, n3, n4]
    g1.edges = get_edges(n0, n1) + get_edges(n0, n3) + get_edges(n1, n2) + get_edges(n3, n4)

    g2 = Graph(2)
    n0 = Node(0, 'the', 0, 0, EN_LANG, True, [1, 0, START], [2, END], [1, 0, START], [2, 1, END], to_de=True,
              to_en=False)
    n1 = Node(2, 'die', 0, 0, DE_LANG, False, [1, 0, START], [2, END], [1, 0, START], [2, 1, END], to_de=False,
              to_en=True)
    n2 = Node(1, 'door', 1, 1, EN_LANG, True, [2, 1, 0, START], [END], [2, 1, 0, START], [1, END], to_de=True,
              to_en=False)
    n3 = Node(3, 'tur', 1, 1, DE_LANG, False, [2, 1, 0, START], [END], [2, 1, 0, START], [1, END], to_de=False,
              to_en=True)

    g2.nodes = [n0, n1, n2, n3]
    g2.edges = get_edges(n0, n1) + get_edges(n2, n3)
    g2.er = True

    s0 = Sentence(0, en, de, alignment)
    s0.graphs = [g0, g1, g2]


    # json_n3 = json.dumps(n3, indent=4)
    # n_load = Node.from_dict(json.loads(json_n3))
    # print n_load.en_left

    json_sentence_str = json.dumps(s0, indent=4, sort_keys=True)
    all_sent.append(' '.join(json_sentence_str.split()))
    # print json_sentence_str

    en = "I like to eat chocolate cake"
    de = "Ich mag zu Schokoladenkuchen essen"
    alignment = "blank"
    g0 = Graph(0)
    n0 = Node(0, 'I', 0, 0, EN_LANG, True, [START], [0, 0, 1, 2, 2, END], [START], [0, 0, 2, 1, END], to_en=False,
              to_de=True)
    n1 = Node(1, 'Ich', 0, 0, DE_LANG, False, [START], [0, 0, 1, 2, 2, END], [START], [0, 0, 2, 1, END], to_en=True,
              to_de=False)
    n2 = Node(2, 'like', 1, 1, EN_LANG, True, [0, START], [0, 1, 2, 2, END], [0, START], [0, 2, 1, END], to_en=False,
              to_de=True)
    n3 = Node(3, 'mag', 1, 1, DE_LANG, False, [0, START], [0, 1, 2, 2, END], [0, START], [0, 2, 1, END], to_en=True,
              to_de=False)
    n4 = Node(4, 'to', 2, 2, EN_LANG, True, [0, 0, START], [1, 2, 2, END], [0, 0, START], [2, 1, END], to_en=False,
              to_de=True)
    n5 = Node(5, 'zu', 2, 2, DE_LANG, False, [0, 0, START], [1, 2, 2, END], [0, 0, START], [2, 1, END], to_en=True,
              to_de=False)
    g0.nodes = [n0, n1, n2, n3, n4, n5]
    g0.edges = get_edges(n0, n1) + get_edges(n2, n3) + get_edges(n4, n5)

    g1 = Graph(1)
    n0 = Node(0, 'eat', 0, 0, EN_LANG, True, [0, 0, 0, START], [2, 2, END], [2, 0, 0, 0, START], [END], to_en=False,
              to_de=True)
    n1 = Node(1, 'essen', 0, 0, DE_LANG, False, [0, 0, 0, START], [2, 2, END], [2, 0, 0, 0, START], [END], to_en=True,
              to_de=False)
    g1.nodes = [n0, n1]
    g1.edges = get_edges(n0, n1)
    g1.er = True

    g2 = Graph(2)
    n0 = Node(0, 'chocolate', 0, 0, EN_LANG, True, [1, 0, 0, 0, START], [2, END], [0, 0, 0, START], [2, 1, END],
              to_en=False, to_de=True)
    n1 = Node(1, 'Schokolade', 0, 0, DE_LANG, False, [1, 0, 0, 0, START], [2, END], [0, 0, 0, START], [2, 1, END],
              to_en=True, to_de=True)
    n2 = Node(2, 'cake', 1, 1, EN_LANG, True, [2, 1, 0, 0, 0, START], [END], [2, 0, 0, 0, START], [1, END], to_en=False,
              to_de=True)
    n3 = Node(3, 'kuchen', 1, 1, DE_LANG, False, [2, 1, 0, 0, 0, START], [END], [2, 0, 0, 0, START], [1, END],
              to_en=True, to_de=True)
    n4 = Node(4, 'SchocoladenKuchen', 0, 0, DE_LANG, False, [1, 0, 0, 0, START], [END], [0, 0, 0, START], [1, END],
              to_en=True, to_de=False)
    g2.nodes = [n0, n1, n2, n3, n4]
    g2.edges = get_edges(n0, n1) + get_edges(n2, n3) + get_edges(n1, n4) + get_edges(n3, n4)
    g2.er = True

    s1 = Sentence(1, en, de, alignment)
    s1.graphs = [g0, g1, g2]

    json_sentence_str = json.dumps(s1, indent=4, sort_keys=True)
    all_sent.append(' '.join(json_sentence_str.split()))
    print 'var json_str_arr = ', all_sent
    # print json_sentence_str





