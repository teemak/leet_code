def find_avg_of_subarray(k, list):
    counter = 1 # count iterations
    result = []

    for i in range(len(list)-k +1):
        _sum = 0.0
        counter += 1
        for j in range(i, i+k):
            _sum += list[j]
            counter += 1
        result.append(_sum/k)
    # print('Counter: ', counter)
    return result

# Time: O(n*k)
# inefficient because of overlapping elements
# 1st iteration [1, 3, 2, 6, -1]
# 2nd iteration [3, 2, 6, -1, 4]
# 3, 2, 6, -1 calculated again

def optimized(k, arr):
    result = [] # expected output is list
    # keep a running total
    sum = 0.0 # cast value to float
    start = 0
    counter = 1

    for end in range(len(arr)): # expand window to k
        sum += arr[end] # expand
        counter += 1
        # - reached end -
        if end >= k -1: # expand end, if possible
            # print('range: ', f"""{start}:{end}""")
            # print('sum: ', sum) # 11, 14, 12, 18, 14 
            avg = sum / k # get avg of window values

            result.append(avg) # record running total
            sum -= arr[start] # remove start value then
            start += 1 # slide start index
            counter += 1

    # print('Counter: ', counter)
    return result

# Time: O(n)
# reuse sum instead of calculating same indices

def main():
    k = 5
    list = [1, 3, 2, 6, -1, 4, 1, 8, 2]
    result_1 = find_avg_of_subarray(k, list)
    result_2 = optimized(k, list)
    # print("RESULT_1: ", result_1)
    print("RESULT_2: ", result_2)

main()

