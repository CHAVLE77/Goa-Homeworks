function removeSmallest(numbers) {
    if (numbers.length === 0) return [];

    const minVal = Math.min(...numbers);
    const index = numbers.indexOf(minVal);

    return [
        ...numbers.slice(0, index),
        ...numbers.slice(index + 1)
    ];
}