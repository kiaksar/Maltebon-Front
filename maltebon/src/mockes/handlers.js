import {rest} from 'msw'
import { makeURL } from '../Connections/Common'
import references from "../assets/References.json"

export const handlers = [
    rest.post(makeURL(references.url_login), (req, res, ctx) => {
        const username = req.username
        const password = req.password
    } )
]