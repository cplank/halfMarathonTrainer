let URL = "https://marathon-training-app.herokuapp.com/"

export function findOneByIdAndDate(id, date) {

    return axios.get(`${URL}/api/race/${id}/${date}`)
}