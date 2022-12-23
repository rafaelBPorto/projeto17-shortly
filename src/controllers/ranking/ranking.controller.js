import { selectRankig } from "../../repository/ranking/ranking.repositories.js";

export async function getRanking(req, res) {

    try {
        
        const ranking = await selectRankig();
        res.status(200).send(ranking);

    } catch (erro) {
        return res.status(500).send(erro.message)
    }

}