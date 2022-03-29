// program to convert first letter of a string to uppercase
export function capitalizeFirstLetter(str: string) {
    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}
