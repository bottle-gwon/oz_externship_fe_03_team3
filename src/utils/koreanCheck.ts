const checkHavingKorean = (text: string) => {
  return /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(text)
}

export default checkHavingKorean
