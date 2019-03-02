def generate_matrices():
    for i in range(0, 64):
        with open("labels/king/" + str(i + 1) + ".json", "w") as fboard:
            fboard.write(str(generate_matrix("K", i)))
        with open("labels/pawn/" + str(i + 1) + ".json", "w") as fboard:
            fboard.write(str(generate_matrix("P", i)))
        with open("labels/bishop/" + str(i + 1) + ".json", "w") as fboard:
            fboard.write(str(generate_matrix("B", i)))
        with open("labels/queen/" + str(i + 1) + ".json", "w") as fboard:
            fboard.write(str(generate_matrix("Q", i)))
        with open("labels/rook/" + str(i + 1) + ".json", "w") as fboard:
            fboard.write(str(generate_matrix("R", i)))
        with open("labels/knight/" + str(i + 1) + ".json", "w") as fboard:
            fboard.write(str(generate_matrix("N", i)))


def generate_matrix(piece, pos):
    matrix = []
    for i in range(0, 64):
        if i == pos:
            matrix.append(generate_vector(piece))
        else:
            matrix.append(generate_vector("E"))
    return matrix


# Format (0,0,0,0,0,0,0)
# (King,Queen,Rook,Bishop,Knight,Pawn,empty)
def generate_vector(piece):
    vectors = {
        "K": [1, 0, 0, 0, 0, 0, 0],
        "Q": [0, 1, 0, 0, 0, 0, 0],
        "R": [0, 0, 1, 0, 0, 0, 0],
        "B": [0, 0, 0, 1, 0, 0, 0],
        "N": [0, 0, 0, 0, 1, 0, 0],
        "P": [0, 0, 0, 0, 0, 1, 0],
        "E": [0, 0, 0, 0, 0, 0, 1]
    }
    return vectors.get(piece)


generate_matrices()
