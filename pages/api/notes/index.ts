import type { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { v4 } from 'uuid';
import { NoteI } from '../../../interfaces/api/notes';
import fs from 'fs';

const handler = nc()
    .get((req: NextApiRequest, res: NextApiResponse) => {
        const notes = fs.readFileSync('data.json');
        const notesParsed: NoteI[] = JSON.parse(notes.toString()).notes;
        res.json(notesParsed);
    })
    .post(async (req: NextApiRequest, res: NextApiResponse) => {
        const notes = fs.readFileSync('data.json');
        const notesParsed: NoteI[] = JSON.parse(notes.toString()).notes;
        const note = {id: v4(), note: req.body.note};
        notesParsed.push(note);
        const data = {
            notes: notesParsed
        }
        const finished = () => {}
        fs.writeFile('data.json', JSON.stringify(data, null, 2), finished)
        res.json(note);
    })

export default handler;