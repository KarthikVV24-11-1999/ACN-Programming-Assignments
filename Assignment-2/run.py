import sys
import enum
import heapq
import copy

class Flag(enum.Enum):
    hop = 1
    dist = 2
    relb = 3
    degree = 4

No_of_nodes = 0
No_of_Edges = 0
No_of_Connections = 0
Metric = 0
Optimism = 0
Edges = []
Adjacency_List = []
Total_Weight = 0
Shortest_Paths = []
Second_Shortest_Paths = []
Disjoint_Paths = []
Connections = []
Established_Connections = []
Node_Wise_Connections = []

def Initialize_Single_Source(AL, n):
    for adj in AL:
        adj[0] = Total_Weight + 1
        adj[1] = -1
    AL[n][0] = 0

def Relax(AL, u, v, w):
    if AL[v][0] > AL[u][0] + w:
        AL[v][0] = AL[u][0] + w
        AL[v][1] = u

def Dijkstra(AL, n):
    Initialize_Single_Source(AL, n)
    Q = [i for i in range(No_of_nodes)]
    while not Q == []:
        t = heapq.nsmallest(1, Q, key=lambda x: AL[x][0])[0]
        Q.remove(t)
        for vertex in AL[t][2]:
            Relax(AL, t, vertex[0], vertex[1])

def Remove_Forward_Edges(u, v, AL):
    n = u
    for i in range(len(Shortest_Paths[u][v]) - 1):
        m = Shortest_Paths[u][v][i]
        n = Shortest_Paths[u][v][i + 1]
        for t in Adjacency_List[m][2]:
            if t[0] == n:
                AL[m][2].remove(t)
                break
    for t in Adjacency_List[n][2]:
        if t[0] == v:
            AL[n][2].remove(t)
            break
        #

def second_shortest_path(u, v):
    if u == v:
        Second_Shortest_Paths[u].append([])
        return
    AL = copy.deepcopy(Adjacency_List)
    Remove_Forward_Edges(u, v, AL)
    Dijkstra(AL, u)
    Second_Shortest_Paths[u].append([])
    temp = AL[v][1]
    while temp != -1:
        Second_Shortest_Paths[u][v].insert(0, temp)
        temp = AL[temp][1]

def disjoint_paths(u, v):
    if u == v:
        Disjoint_Paths[u].append([[], []])
        return
    Disjoint_Paths[u].append([[u], [u]])
    for s in Shortest_Paths[u][v][1:]:
        if s in Second_Shortest_Paths[u][v]:
            Disjoint_Paths[u][v][0].extend(Second_Shortest_Paths[u][v][Second_Shortest_Paths[u][v].index(s):])
            break
        else:
            Disjoint_Paths[u][v][0].append(s)
    for s in Second_Shortest_Paths[u][v][1:]:
        if s in Shortest_Paths[u][v]:
            Disjoint_Paths[u][v][1].extend(Shortest_Paths[u][v][Shortest_Paths[u][v].index(s):])
            break
        else:
            Disjoint_Paths[u][v][1].append(s)

def find_disjoint_paths():
    for i in range(No_of_nodes):
        Disjoint_Paths.append([])
    for n in range(No_of_nodes):
        for m in range(No_of_nodes):
            disjoint_paths(n, m)

def find_second_shortest_paths():
    for i in range(No_of_nodes):
        Second_Shortest_Paths.append([])
    for n in range(No_of_nodes):
        for m in range(No_of_nodes):
            second_shortest_path(n, m)

def find_shortest_paths():
    for i in range(No_of_nodes):
        Shortest_Paths.append([])
    for n in range(No_of_nodes):
        AL = copy.deepcopy(Adjacency_List)
        Dijkstra(AL, n)
        for t in range(No_of_nodes):
            Shortest_Paths[n].append([])
            temp = AL[t][1]
            while temp != -1:
                Shortest_Paths[n][t].insert(0, temp)
                temp = AL[temp][1]

def build_AL():
    global Total_Weight
    for n in range(No_of_nodes):
        Adjacency_List.append([-1, -1, []])
    if Metric == 1:
        for edge in Edges:
            Delay = int(edge[2])
            Capacity = int(edge[3])
            Adjacency_List[int(edge[0])][2].append([int(edge[1]), 1, Delay, Capacity])
            Adjacency_List[int(edge[1])][2].append([int(edge[0]), 1, Delay, Capacity])
        Total_Weight += 2 * No_of_Edges
    elif Metric == 2:
        for edge in Edges:
            Weight = int(edge[2])
            Delay = int(edge[2])
            Capacity = int(edge[3])
            Adjacency_List[int(edge[0])][2].append([int(edge[1]), Weight, Delay, Capacity])
            Adjacency_List[int(edge[1])][2].append([int(edge[0]), Weight, Delay, Capacity])
            Total_Weight += 2 * Weight
    elif Metric == 3:
        for edge in Edges:
            Weight = 1 - edge[4]
            Delay = int(edge[2])
            Capacity = int(edge[3])
            Adjacency_List[int(edge[0])][2].append([int(edge[1]), Weight, Delay, Capacity])
            Adjacency_List[int(edge[1])][2].append([int(edge[0]), Weight, Delay, Capacity])
            Total_Weight += 2 * Weight
    if Metric == 4:
        for edge in Edges:
            Delay = int(edge[2])
            Capacity = int(edge[3])
            Adjacency_List[int(edge[0])][2].append([int(edge[1]), 1, Delay, Capacity])
            Adjacency_List[int(edge[1])][2].append([int(edge[0]), 1, Delay, Capacity])
        for Node in Adjacency_List:
            for Weight in Node[2]:
                Weight[1] *= len(Adjacency_List[Weight[0]][2])
                Total_Weight += Weight[1]

def establish_Connection(u, v, b):
    Trials = []
    current = Disjoint_Paths[u][v]
    if current[2] > current[3]:
        Trials.extend(current[0:2][::-1])
        Trials.extend(current[2:4][::-1])
    else:
        Trials.extend(current)
    for x in range(2):
        n = u
        flag = 1
        for i in range(len(Trials[x]) - 1):
            if flag == 0:
                break
            m = Trials[x][i]
            n = Trials[x][i + 1]

            for t in Adjacency_List[m][2]:
                if t[0] == n:
                    if b > t[3]:
                        flag = 0
                    break
        for t in Adjacency_List[n][2]:
            if flag == 0:
                break
            if t[0] == v:
                if b > t[3]:
                    flag = 0
                break
        if flag == 1:
            temp = [len(Established_Connections), u, v, Trials[x], Trials[x + 2]]
            n = u
            Node_Wise_Connections[u].append([len(Established_Connections), -1, -1])
            for i in range(len(Trials[x]) - 1):
                m = Trials[x][i]
                n = Trials[x][i + 1]
                Node_Wise_Connections[m][-1].extend([n, len(Node_Wise_Connections[m]) - 1])
                Node_Wise_Connections[n].append([len(Established_Connections), m, len(Node_Wise_Connections[n])])
                for t in Adjacency_List[m][2]:
                    if t[0] == n:
                        t[3] -= b
                        break
            Node_Wise_Connections[n][-1].extend([v, len(Node_Wise_Connections[n]) - 1])
            Node_Wise_Connections[v].append([len(Established_Connections), n, len(Node_Wise_Connections[v]), -1, -1])
            for t in Adjacency_List[n][2]:
                if t[0] == v:
                    t[3] -= b
                    break
            Established_Connections.append(temp)
            break

def make_Connections():
    for n in range(No_of_nodes):
        Node_Wise_Connections.append([])
    for conn in Connections:
        b = 0
        if Optimism == 0:
            b += min(conn[4], conn[3] + 0.25 * (conn[4] - conn[2]))
        else:
            b += conn[4]
        establish_Connection(conn[0], conn[1], b)

def read_topology(topologyfile):
    Nodes_Edges = list(map(int, topologyfile.readline().split(" ")))
    global No_of_nodes
    global No_of_Edges
    No_of_nodes += Nodes_Edges[0]
    No_of_Edges += Nodes_Edges[1]
    for e in range(No_of_Edges):
        Edges.append(list(map(float, topologyfile.readline().split(" "))))
    build_AL()

def read_connections(connectionsfile):
    global No_of_Connections
    No_of_Connections += int(connectionsfile.readline())
    for c in range(No_of_Connections):
        Connections.append(list(map(int, connectionsfile.readline().split(" "))))
    make_Connections()

def fill_routing_tables(routingtablefile):
    for u in range(No_of_nodes):
        routingtablefile.write("Node " + str(u) + " Routing Table:\n")
        for v in range(No_of_nodes):
            for x in range(2):
                routingtablefile.write(str(v) + "\t")
                for t in Disjoint_Paths[u][v][x]:
                    routingtablefile.write(str(t) + "->")
                routingtablefile.write(str(v) + "\n")
                cost = 0
                delay = 0
                n = u
                for i in range(len(Disjoint_Paths[u][v][x]) - 1):
                    m = Disjoint_Paths[u][v][x][i]
                    n = Disjoint_Paths[u][v][x][i + 1]
                    for t in Adjacency_List[m][2]:
                        if t[0] == n:
                            cost += t[1]
                            delay += t[2]
                            break
                for t in Adjacency_List[n][2]:
                    if t[0] == v:
                        cost += t[1]
                        delay += t[2]
                        break
                routingtablefile.write(str(delay) + "\t")
                routingtablefile.write(str(cost))
                routingtablefile.write("\n----------------------------------------\n")
                Disjoint_Paths[u][v].append(cost)
        routingtablefile.write("\n****************************************\n")

def fill_forwarding_tables(forwardingfile):
    for u in Node_Wise_Connections:
        forwardingfile.write("Node " + str(Node_Wise_Connections.index(u)) + " Forwarding Table:\n")
        for c in u:
            for x in range(1, 5):
                forwardingfile.write(str(c[x]) + "\t")
            forwardingfile.write("\n----------------------------------------\n")
        forwardingfile.write("\n****************************************\n")

def fill_paths(pathsfile):
    for c in Established_Connections:
        pathsfile.write(str(c[0]) + "\t" + str(c[1]) + "\t" + str(c[2]) + "\n")
        for t in c[3]:
            pathsfile.write(str(t) + "->")
        pathsfile.write(str(c[2]) + "\n")
        for u in c[3]:
            for nwc in Node_Wise_Connections[u]:
                if nwc[0]==c[0]:
                    pathsfile.write(str(nwc[4]) + ",")
        pathsfile.write("-1\n")
        pathsfile.write(str(c[4]) + "\n----------------------------------------\n")

if __name__ == "__main__":
    topologyfile = open(sys.argv[1], "r")
    connectionsfile = open(sys.argv[2], "r")
    routingtablefile = open(sys.argv[3], "w")
    forwardingfile = open(sys.argv[4], "w")
    pathsfile = open(sys.argv[5], "w")
    Metric += Flag[sys.argv[6]].value
    Optimism += int(sys.argv[7])
    read_topology(topologyfile)
    find_shortest_paths()
    find_second_shortest_paths()
    find_disjoint_paths()
    fill_routing_tables(routingtablefile)
    read_connections(connectionsfile)
    fill_forwarding_tables(forwardingfile)
    fill_paths(pathsfile)
    topologyfile.close()
    connectionsfile.close()
    routingtablefile.close()
    forwardingfile.close()
    pathsfile.close()