const profile = {
  name: "Arsena Luciendra",
  nickname: "Sena",
  username: "senaczk",
  role: "Developer",

  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "REST API",
    "Self Hosting",
    "VPS"
  ]
}

function getProfile() {
  return `
Name: ${profile.name}
Nickname: ${profile.nickname}
Role: ${profile.role}
`
}

console.log(getProfile())
