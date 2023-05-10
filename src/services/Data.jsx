export async function getAllStays() {
  try {
    const response = await fetch("../data/stays.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
