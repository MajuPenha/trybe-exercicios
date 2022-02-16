const list = document.getElementById('cryptoList')
/* const listData = (data) => {
  const dataArr = data.filter((item, index) => {
    item[index] <= 10
  })
  const cryptoInfo = dataArr.filter((item) => item.name)git a
  console.log(cryptoInfo);
}
 */
async function fetchData() {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
const response = await fetch(`https://api.coincap.io/v2/assets`, myObject)
const data = await response.json();
const ranked = data.data.filter((item) => item.rank <= 10);
const info = ranked.map((item) => ({name: item.name, value: item.priceUsd}))
console.log(info)


}
window.onload = fetchData;