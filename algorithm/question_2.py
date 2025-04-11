def longest_word(sentence):
    words = sentence.split()
    longest = max(words, key=len)
    print(f"{longest}: {len(longest)} character")

sentence = "Saya sangat senang mengerjakan soal algoritma"
longest_word(sentence)