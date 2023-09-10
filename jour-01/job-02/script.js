function my_str_search(haystack, needle) {
    /**
    * Your code here
    */
    let occurences = 0;
    for(let i = 0; i <= haystack.length ; i++) {
        if (haystack[i] === needle) {
            occurences++;
        }
    }
    return occurences;
}
my_str_search('Hello World', 'o');
