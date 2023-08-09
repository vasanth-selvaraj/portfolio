
export async function Repos() {
  try{
    const respose = await fetch("https://api.github.com/users/vasanth-selvaraj/repos");
    return respose.json();
  }catch(err){

  }
}
