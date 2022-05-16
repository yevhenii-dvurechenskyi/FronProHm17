// /*
//     1. Уникализация значений в массиве. (решить через filter)
//     Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив,
//     состоящий только из уникальных значений первого массива.
// */

const arr = function(array){
    const result = array.filter((number, index, arr) => arr.indexOf(number) == index);

    return console.log(result);
}

arrayMain = [1,2,7,4,4,5,6,6,6,7,8,9,9,9,9,9,9,9,7,6,6,6];
console.log(arrayMain);
arr(arrayMain);

// /*
//      2. Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.
// */

Number.prototype.plus = function(x){
	return this + x;
}
Number.prototype.minus = function(y){
	return this - y;
}

console.log((3).plus(3).minus(1));

// /*
//     3. Анаграмма
//     Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения.
//     Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
// */

function anagram(firstWord, secondWord){

    let firstWordNormalization = firstWord.toLowerCase();
    let secondWordNormalization = secondWord.toLowerCase();
    
    if(firstWord.length === secondWord.length){
        firstWordArray = firstWordNormalization.split('');
        secondWordArray = secondWordNormalization.split('');

        result1 = firstWordArray.sort();
        result2 = secondWordArray.sort();

        let count = 0;
        for(let i = 0; i < firstWordArray.length; i++){
            if(result1[i] === result2[i]){
                count++;
            }
        }

        if(count === firstWordArray.length){
            return 'Well, your word is an anagram!';
        }

        else{
            return `Your word is not an anagram!`;
        }
    }
    else{
        return `Your word is not an anagram!`;
    }
}
console.log(anagram(`listen`, `silent`));

/*
    * 4. Напишите функцию, которая будет удалять повторяющиеся значения и возвращать получившийся массив.
    Значения в результирующем массиве должны быть отсортированны по кол-ву слов во входном массиве.
*/

const words = ['orange', 'banana', 'banana', 'grapefruit', 'banana', 'grapefruit', 'banana'];

function solution(words) {
    const result1 = words.filter((word, index, arr) => arr.indexOf(word) == index);
    const result2 = [];

    let counter = 0;

    for(let i = 0; i < result1.length; i++){
        for(let j = 0; j < words.length; j++){
            if(result1[i] === words[j]){
                counter++;
            }
        }
        if(result2[counter] !== words[i]){
            result2[counter] = result1[i];
        }
        counter = 0;
    }
    return result2.filter(item => item !== null);
}
console.log(words);
console.log(solution(words));

