export default async function handler(req, res) {
    const { sign, period } = req.query

    try {
        const response = await fetch(
            `https://freehoroscopeapi.com/api/v1/get-horoscope/${period}?sign=${sign}`
        )

        const data = await response.json()

        res.status(200).json(data)

    } catch {
        res.status(500).json({
            error: "Impossible de récupérer l'horoscope"
        })
    }
}