# # Write a method that prints out the numbers 1 to 1000 that are divisible by 3.
# def print_numbers_divisible_by_three
#   index = 1
#   while index <= 1000
#     if index % 3 == 0
#       puts index
#     end
#     index += 1
#   end
# end
# print_numbers_divisible_by_three


# # Write a method that accepts an array of strings and prints out every other string.
# def print_every_other_item(strings)
#   index = 0
#   strings.each do |string|
#     if index % 2 == 0
#       puts string
#     end
#     index += 1
#   end
# end
# print_every_other_item(["a", "b", "c", "d", "e"])


# # Write a method that accepts an array of numbers and returns the sum.
# def compute_sum(numbers)
#   sum = 0
#   numbers.each do |number|
#     sum += number
#   end
#   return sum
# end
# puts compute_sum([2, 4, 5])


# # Start with the hash: city_populations = {chi: 2700000}
# # Add populations to the city_populations hash for New York City (8.4 million) and San Francisco (800,000).
# # The result should be: {chi: 2700000, nyc: 8400000, sf: 800000}
# city_populations = {chi: 2700000}
# city_populations[:nyc] = 8400000
# city_populations[:sf] = 800000
# p city_populations



# # Write a method that prints out every number from 1 to 100. 
# def one_to_a_hundred
#   num = 0
#   while num < 100
#     num += 1
#     puts num
#   end
# end

# one_to_a_hundred


# # Write a method that prints out every other number from 1 to 100. (That is, 1, 3, 5, 7 … 99).
# def every_other_number
#   num = 0 
#   while num < 100
#     if num % 2 != 0 
#       puts num
#     end
#     num += 1
#   end  
# end

# every_other_number


# # Write a method that accepts an array of numbers as a parameter, and counts how many 55’s there are in the array.
# def num_of_55(numbers)
#   count = 0
#   numbers.each do |num|
#     if num == 55
#       count += 1
#     end
#   end
#   puts count
# end

# num_of_55([1, 55, 55, 1002, 2, 55])


# # Write a method that accepts an array of strings and returns a new array that has the string "awesomesauce" inserted between every string. 
# # For example, if the initial array is ["a", "b", "c", "d", "e"], then the returned array should be ["a", "awesomesauce", "b", "awesomesauce", "c", "awesomesauce", "d", "awesomesauce", "e"].

# def awesomesauce(strings)
#   length_of_array = strings.length
#   index = 0
#   awesomesauced_array = []

#   while index < length_of_array
#     awesomesauced_array << strings[index]
#     if index != length_of_array - 1
#       awesomesauced_array << "awesomesauce"
#     end
#     index += 1
#   end
#   awesomesauced_array
# end

# p awesomesauce(["a", "b", "c", "d", "e"])

# # Start with the hash: item_amounts = {chair: 5, table: 2}
# # Someone just bought two chairs. Change the hash such that the chair amount is 3.
# # The final result should be: {chair: 3, table: 2}
# item_amounts = {chair: 5, table: 2}
# item_amounts[:chair] -= 2
# p item_amounts


# # Start with the hash: item_amounts = {chair: 5, table: 2}
# # You received 7 desks to sell. Change the hash to include desks.
# # The final result should be: {chair: 5, table: 2, desk: 7}
# item_amounts = {chair: 5, table: 2}
# item_amounts[:desks] = 7
# p item_amounts


# # Write a method that accepts a number and returns its factorial.
# # For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.
# def factorial(num)
#   product = 1
#   while num > 0
#     product *= num
#     num -= 1
#   end
#   product  
# end

# puts factorial(6)


# # Write a method that accepts two arrays of numbers, and prints the sum of every combination of numbers from first and second array. 
# # For example, if the method receives [1, 5, 10] and [100, 500, 1000], the method should print a list: 101, 501, 1001, 105, 505, 1005, 110, 510, 1010].

# def print_sums(nums_1, nums_2)
#   nums_1.each do |num_1|
#     nums_2.each do |num_2|
#       puts num_1 + num_2
#     end
#   end
# end

# print_sums([1, 5, 10], [100, 500, 1000])


# # Write a function that accepts an array of strings and returns a new array containing every other string from the original array. For example, if the input is ["a", "b", "c", "d", "e", "f"], the output should be ["a", "c", "e"].

# def select_even_items(strings)
#   result = []
#   index = 0
#   strings.each do |string|
#     if index % 2 == 0
#       result << string
#     end
#     index = index + 1
#   end
#   result
# end
# p select_even_items(["a", "b", "c", "d", "e", "f"])


# # Write a method that accepts one argument - an array of numbers. The method should return the greatest number. For example, if the input is [5, 4, 8, 1, 2], the output should be 8.

# def max(numbers)
#   current_max = numbers[0]
#   numbers.each do |number|
#     if number > current_max
#       current_max = number
#     end
#   end
#   current_max
# end
# p max([5, 4, 8, 1, 2])

# # Write a method that accepts one argument - an array of numbers that are in ascending order. The method that returns a new array with the same values in descending order. However, do not use the "reverse" method built in to Ruby.

# def descending(numbers)
#   result = []
#   index = numbers.length - 1
#   numbers.length.times do
#     result << numbers[index]
#     index = index - 1
#   end
#   result
# end
# p descending([1, 3, 5, 7])



# # 1. Write a function that reverses a string. Don’t use the "reverse" method! (Note: you can use the .split("") method to convert a string into an array of characters).

# def reverse_string(string)
#   reversed_string = ""
#   index = string.length - 1

#   while index >= 0
#     reversed_string += string[index]
#     index -= 1
#   end
#   reversed_string
# end

# p reverse_string("lifesaver")



# # 2. Write a function that accepts a string and returns the number of times that the letter "a" occurs in it.

# def count_as(string)
#   string_array = string.split("")
#   count = 0

#   string_array.each do |letter|
#     if letter == "a"
#       count += 1
#     end
#   end
#   count
# end

# puts count_as("banana")



# # 3. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number to search for within the array. The function should do a linear search and return the index at which this value is found, or it should return nil if the value is not found. See if there’s a way in which you can optimize this method to keep its number of steps to a minimum! Note: Do not use the "index" method!

# def find_index(nums, target)
#   index = 0

#   nums.each do |num|
#     if num == target
#       return index
#     end
#     index += 1
#   end
#   nil
# end

# p find_index([2, 3, 4, 7, 9], 7)
# p find_index([2, 3, 4, 7, 9], 10)


# # 4. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a new number that is not yet in the array. The function should return a new array with the new number inserted in the proper place. Do not use the "sort" method!

# def add_target(ordered_nums, target)
#   placement_index = 0 

#   # finding the correct index to place the number
#   while ordered_nums[placement_index] < target
#     placement_index += 1
#   end

#   # move the other elements out of the way
#   index = ordered_nums.length - 1; 
#   while index >= placement_index
#     ordered_nums[index + 1] = ordered_nums[index]
#     index -= 1;
#   end

#   # place the number at the right index
#   ordered_nums[placement_index] = target

#   ordered_nums
# end

# p add_target([2, 3, 4, 7, 9], 1)

# 5. Write a function that accepts two arguments. The first argument is an array of numbers that are in ascending order. The second argument is a number that is contained within the array. The function should return the string "lower" if the value is found in the lower half of the array, and it should return "higher" if the value is found within the greater half of the array. Try to optimize this algorithm so that it takes a minimum number of steps!

def high_or_low(ordered_nums, target) 
  mid_index = (ordered_nums.length/2).floor
  index = 0

  while index < ordered_nums.length
    if ordered_nums[index] == target
      if index < mid_index
        message = "low"
      else
        message = "high"
      end
    end
    index += 1
  end

  message
end

p high_or_low([2, 3, 4, 7, 9], 9)