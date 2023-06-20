# Solution 1
def is_palindrome(x)
    number = x.to_s

    number.each_char.with_index do |char, index|
        next_index =  number.length - index - 1
        if char != number[next_index] then return false end
    end
    true
end

# Solution 2
def is_palindrome(x)
    return false if x < 0
    return true if x < 10
    return false if x % 10 == 0

    foo = x.to_s
    foo == foo.reverse
end
