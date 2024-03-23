function swap(Unsorted_Array,First_Number,Second_Number) 
{ 
    var temp = Unsorted_Array[First_Number]; 
    Unsorted_Array[First_Number] = Unsorted_Array[Second_Number]; 
    Unsorted_Array[Second_Number] = temp; 
} 
  
function SelectionSort(Array,  Size_Of_Array) 
{ 
    var  Smallest_Index; 
  
    // One by one move boundary of unsorted subarray 
    for (var i = 0; i < Size_Of_Array-1; i++) 
    { 
        // Find the minimum element in unsorted array 
        Smallest_Index = i; 
        for ( var j = i + 1; j < Size_Of_Array; j++) 
        if (Array[j] < Array[Smallest_Index]) 
            Smallest_Index = j; 
  
        // Swap the found minimum element with the first element 
        swap(Array,Smallest_Index, i); 
    } 
    return Array;
} 


let Unsorted_Array = [8,2,4,9,3];
let sorted_Array = SelectionSort(Unsorted_Array,Unsorted_Array.length);
console.log(sorted_Array);