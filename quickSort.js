function quickSort(a, start, end){
    var i = start, j = end;
    if ((j - i) > 0) {
        var k = a[i];
        while (i < j) {
            while (i < j) {
                if (a[j] < k) {
                    a[i] = a[j];
                    i++;
                    break;
                }
                j--;
            }
            while (i < j) {
                if (a[i] > k) {
                    a[j] = a[i];
                    j--;
                    break;
                }
                i++;
            }
        }
        a[i] = k;
        quickSort(a, start, i);
        quickSort(a, i + 1, end);
    }
}
var arr = [6,5,4,3,2,1,34,23222,435,234,324,435,436,654,76,8,6,5,78,7,4,23,4,23,54,36,67,54,67];
quickSort(arr, 0, arr.length - 1);
console.log(arr);