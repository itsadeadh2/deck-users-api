exports.get = async (req, res, next) => {
  try {
    const payload = {
      apiName: "BoilerPlate",
      description: "Boilerplate utilizado para criação de novo projetos.",
      version: "1.0.0"
    }
    res.send(payload);
  } catch (error) {
    res.status(400).send(error);
  }
}