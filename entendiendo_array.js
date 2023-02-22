/*diferentes array*/  
const posts = [{
  id: 1,
  title: "Aprendiendo Java",
  image: 'https://img.com/1',
  tags: ['javascript','webdevelopment']
},
{
  id: 2,
  title: "Mi experiencia con react",
  image: 'https://img.com/2',
  tags: ['javascript','webdevelopment','react']
},
{ id: 3,
  title: "Porque deje angular",
  image: 'https://img.com/3',
  tags: ['javascript','webdevelopment','angular']
}]

/// metodo find 
posts.find(post => post.title == 'Porque deje angular')
///metodo some comprueba si existe 
posts.some(post => post.id === 1)

///metodo some con includes para buscar alguno en todos los datos
posts.some(post => post.tags.includes('react'))

///metodo every con includes para buscar que un parametro, se incluye en todos los datos
posts.some(post => post.tags.includes('react'))

///metodo map, como un for pero puedes decirle que hacer, retorna del array solo el titulo
posts.map(post => post.title)
///metodo filter con includes para filtrar la informacion 
posts.filter(post => post.tags.includes('react'))

//metodo reduce
posts.reduce((allTags, post)=> {
  ////array from crea un arrar a partir de un array
  ////new set quita los valores repetidos de un array
  return Array.from( new Set([...allTags, ...post.tags]))
},[])
