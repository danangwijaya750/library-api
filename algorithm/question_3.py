def count_occurrences(input_array, query_array):
    return [input_array.count(q) for q in query_array]

INPUT = ['xc', 'dz', 'bbb', 'dz']
QUERY = ['bbb', 'ac', 'dz']
print(count_occurrences(INPUT, QUERY)) 
