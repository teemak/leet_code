import math

# k is max sum
def smallest_subarray_with_greatest_sum(arr, k):
    window_sum = 0 # running count
    min_length = math.inf # set as largest number
    window_start = 0 # ?
    
    for window_end in range(0, len(arr)):
        window_sum += arr[window_end] # add next element
        
        # keep moving end of window until sum >= k
        while window_sum >= k:
            # keep getting window sum until ???
            current = window_end - window_start + 1
            min_length = min(min_length, current)
            print("min:     ", min_length)
            print("current: ", current)
            window_sum -= arr[window_start] # remove start value
            print("sum: ", window_sum)
            window_start += 1 # slide start of window
    
    if min_length == math.inf: # no result found
        return 0
    
    return min_length

def main():
    print(smallest_subarray_with_greatest_sum([2,1,5,2,3,2], 7))
    print(smallest_subarray_with_greatest_sum([2,1,5,2,8], 7))
    print(smallest_subarray_with_greatest_sum([3,4,1,1,6], 8))

main()
