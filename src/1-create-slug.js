// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  const trimmed = title.trim()
  const bannedText = ["!", "#", "?"]

  for (let char of bannedText) {
    if(trimmed.includes(char)){
      return null
  }
}
const lower = trimmed.toLowerCase()

const slug = lower.split(" ").join("-")

return slug

};



module.exports = {
  createSlug,
};
