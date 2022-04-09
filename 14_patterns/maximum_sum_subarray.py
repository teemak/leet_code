# Given an array of positive numbers and a positive number ‘k,’ find the maximum sum of any contiguous subarray of size ‘k’.

# example 1:
input_1 = [2, 1, 5, 1, 3, 2], k = 3
output = 9
explanation = 'Subarray with max sum is [5, 1, 3]'

# example 2:
input_1 = [2, 3, 4, 1, 5], k = 2
output = 7
explanation = 'Subarray with max sum is [3, 4]

# start 
# [2, 1, 5, 1, 3, 2] expand to k elements
#        end

# start 
# [2, 1, 5, 1, 3, 2] record array and value = 8
#        end

#     start 
# [2, 1, 5, 1, 3, 2] slide, repeat 2nd step = 7
#           end

#        start 
# [2, 1, 5, 1, 3, 2] slide, repeat 2nd step = 9
#              end

#           start 
# [2, 1, 5, 1, 3, 2] slide, repeat 2nd step = 6
#                 end
