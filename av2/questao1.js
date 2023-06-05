function primo(n){
    if (n >= 2) {
        let pm = true;
        let i = 2;
        while (i < n && pm){
            if (n % i == 0) {
                pm = false;
            }
            i++;
        }
        return pm;
    } else{
        return false;
    }
}

console.log(primo());