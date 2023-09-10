function myIsInString(haystack, needle) {
    /**
     * Your code here
     */
    bool = undefined;
    for (let i = 0; i < needle.length; i++) {
        for (let y = 0; y <= haystack.length; y++) {
            if (bool = true) {
            }
            else if (haystack[i] === needle[y]) {
                bool = true
                continue;
            }
            
        }
    }
}
myIsInString("Hello World","llo");
myIsInString("Hello World","rele");
