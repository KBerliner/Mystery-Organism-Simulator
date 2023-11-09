// Returns a random DNA base
const returnRandBase = (base = 0) => {
  let dnaBases = ['A', 'T', 'C', 'G'];
  if (base == 0) {
    return dnaBases[Math.floor(Math.random() * 4)];
  } else {
    dnaBases.splice(dnaBases.indexOf(base), 1);
    return dnaBases[Math.floor(Math.random() * 3)];
  }
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// Factory Function

const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      let baseIndex = Math.floor(Math.random() * 15);
      let base = dna[baseIndex];
      let newBase = returnRandBase(base);
      dna.splice(baseIndex, 1, newBase);
    }
  }
}