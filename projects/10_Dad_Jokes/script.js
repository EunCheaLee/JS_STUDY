const jokeEl=document.getElementById('joke')
const jokeBtn=document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
    // 캐시 방지용 랜덤 쿼리스트링 추가
    const url = 'https://api.allorigins.win/raw?url=http://munit.co.kr/lucky/today_proverb.php'
              + '?_=' + new Date().getTime()

    const res = await fetch(url)
    const htmlString = await res.text()

    // DOMParser로 HTML 문자열 → DOM 객체 변환
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlString, 'text/html')

    // <p> 태그 안 텍스트 추출
    const proverb = doc.querySelector('p')?.innerText || '데이터 없음'

    jokeEl.innerHTML = proverb
}

/*

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeEl.innerHTML = data.joke
}

*/