import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { NoteI } from '../../../interfaces/api/notes';
const fs = require('fs');

const handler = nc()
    .get(async (req: NextApiRequest, res: NextApiResponse) => {
        const notes = fs.readFileSync('data.json');
        const notesParsed: NoteI[] = JSON.parse(notes.toString()).notes;

        if (req.query.id) {
            const note = notesParsed.find(el => el.id === req.query.id);
            if (note) {
                return res.json(note);
            }
            res.status(404)
            res.end()
            return
        }
        res.status(400)
        res.end()
        return
    })
    .put(async (req: NextApiRequest, res: NextApiResponse) => {
        const notes = fs.readFileSync('data.json');
        const notesParsed: NoteI[] = JSON.parse(notes.toString()).notes;

        if (req.query.id) {
            const noteIndex = notesParsed.findIndex(el => el.id === req.query.id);
            if (noteIndex) {
                notesParsed[noteIndex].note = req.body.note

                const data = {
                    notes: notesParsed
                }
                const finished = () => {}
                fs.writeFile('data.json', JSON.stringify(data, null, 2), finished)
                res.json(notesParsed[noteIndex].note);
            }
            res.status(404)
            res.end()
            return
        }
        res.status(400)
        res.end()
        return
    })
    .delete((req: NextApiRequest, res: NextApiResponse) => {
        const notes = fs.readFileSync('data.json');
        const notesParsed: NoteI[] = JSON.parse(notes.toString()).notes;

        if (req.query.id) {
            const noteIndex = notesParsed.findIndex(el => el.id === req.query.id);
            if (noteIndex) {
                notesParsed.splice(noteIndex, 1);
                const data = {
                    notes: notesParsed
                }
                const finished = () => {}
                fs.writeFile('data.json', JSON.stringify(data, null, 2), finished)
                res.json(`note ${req.query.id} deleted`);
            }
            res.status(404)
            res.end()
            return
        }
        res.status(400)
        res.end()
        return
    })

export default handler;