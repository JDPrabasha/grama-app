const PoliceRecords = require('../model/policeRecordModel')

const policeCheckController = {
    policeCheck: async (req, res) => {
        try {
            const { nic } = req.body;
            const policeRecord = await PoliceRecords.findOne({ nic })

            if(policeRecord){

                res.json({
                    status: 'crime found',
                    records: policeRecord.crime
                })
            }else{
                res.json({
                    status: 'crime not found',
                })

            }

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    addPoliceCheck: async (req, res) => {
        try {
            const { fullname, nic, crime} = req.body
            const newRecord = new PoliceRecords({
                fullname, nic, crime
            })

            await newRecord.save()
            res.json({msg: "Record Added"})

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}

module.exports = policeCheckController