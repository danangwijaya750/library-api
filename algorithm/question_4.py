def diagonal_difference(matrix):
    n = len(matrix)
    primary = sum(matrix[i][i] for i in range(n))
    secondary = sum(matrix[i][n - 1 - i] for i in range(n))
    return abs(primary - secondary)

matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]
print(diagonal_difference(matrix))
