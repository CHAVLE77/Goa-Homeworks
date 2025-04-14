function formatPoem(poem) {
    const sentences = poem.split('. ');
    return sentences.map(sentence => sentence.trim()).join('.\n');
  }
  