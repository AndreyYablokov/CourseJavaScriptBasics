function eratosthenes_sieve(numbers) {
    var idx = 0;
    var idx_not_prime_num;
    var idx_result;
    var result = [];
    numbers[1] = 0;
    max_number = numbers.length;
    while (idx < max_number) {
        if (numbers[idx] !== 0) {
            idx_not_prime_num = idx * 2;
            while (idx_not_prime_num < max_number) {
                numbers[idx_not_prime_num] = 0;
                idx_not_prime_num += idx;
            }
        }
        ++idx;
    }
    idx = 0;
    idx_result = -1;
    while (idx < max_number) {
        if (numbers[idx] != 0) {
            ++idx_result;
            result[idx_result] = numbers[idx];
        }
        ++idx;
    }
    return result;
}

var nums = new Array(101);
var idx = 0;
while (idx <= 100) {
    nums[idx] = idx;
    ++idx;
}
alert(`Простые числа в диапазоне от 0 до 100: ${eratosthenes_sieve(nums)}`);
