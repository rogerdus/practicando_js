function sumar (n1,n2){
    return n1 + n2;
}

function restar (n1, n2){
    return n1 - n2;
}

/// solo puede haber un export default por archivo

export default function multiplicar (n1, n2){
    return n1 * n2;
}

export {sumar, restar}