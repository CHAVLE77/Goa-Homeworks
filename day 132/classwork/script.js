function generateGroups(members, groupCount) {
    members = members.sort(() => Math.random() - 0.5);
  
    const groups = Array.from({ length: groupCount }, () => []);
  
    members.forEach((member, index) => {
      groups[index % groupCount].push(member);
    });
  
    return groups;
  }
  
  const participants = ["man1",'man2','mam3','man4','man5','man6','man7','man8'];
  const numberOfGroups = 3;
  
  const result = generateGroups(participants, numberOfGroups);
  
  result.forEach((group, index) => {
    console.log(`group ${index + 1}:`, group);
  });
  


  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ka`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temp = data.main.temp;
    const weather = data.weather[0].description;
    const cityName = data.name;

    console.log(`wheater ${cityName}-ში:`);
    console.log(`temperature: ${temp}°C`);
    console.log(`desc: ${weather}`);
  })
  .catch(error => {
    console.error("error:", error);
  });