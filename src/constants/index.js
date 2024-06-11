import {
    code100,
    code101,
    code102,
    code103,
    code200,
    code201,
    code202,
    code203,
    code204,
    b100,
    b101,
    b102,
    b103,
    b200,
    b201,
    b202,
    b203,
    b204
} from '../assets';

const codes = [
    {
        name: '100',
        description: 'Continue',
        text: 'The HTTP 100 Continue informational status response code indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.',
        image: code100,
        imageBefore: b100
    },
    {
        name: '101',
        description: 'Switching Protocols',
        text: 'The HTTP 101 Switching Protocols response code indicates a protocol to which the server switches. The protocol is specified in the Upgrade request header received from a client.',
        image: code101,
        imageBefore: b101
    },
    {
        name: '102',
        description: 'Processing',
        text: 'The HTTP 102 Processing informational status response code indicates to client that a full request has been received and the server is working on it.',
        image: code102,
        imageBefore: b102
    },
    {
        name: '103',
        description: 'Early Hints',
        text: 'The HTTP 103 Early Hints information response may be sent by a server while it is still preparing a response, with hints about the resources that the server is expecting the final response will link.',
        image: code103,
        imageBefore: b103
    },
    {
        name: '200',
        description: 'Early Hints',
        text: 'The HTTP 200 OK success status response code indicates that the request has succeeded. A 200 response is cacheable by default.',
        image: code200,
        imageBefore: b200
    },
    {
        name: '201',
        description: 'Early Hints',
        text: 'The HTTP 201 Created success status response code indicates that the request has succeeded and has led to the creation of a resource.',
        image: code201,
        imageBefore: b201
    },
    {
        name: '202',
        description: 'Early Hints',
        text: 'The HTTP 202 Accepted response status code indicates that the request has been accepted for processing, but the processing has not been completed; in fact, processing may not have started yet.',
        image: code202,
        imageBefore: b202
    },
    {
        name: '203',
        description: 'Early Hints',
        text: 'The HTTP 203 Non-Authoritative Information response status indicates that the request was successful but the enclosed payload has been modified by a transforming proxy from that of the origin server\'s 200 OK response.',
        image: code203,
        imageBefore: b203
    },
    {
        name: '204',
        description: 'No Content',
        text: 'The HTTP 204 No Content success status response code indicates that a request has succeeded, but that the client doesn\'t need to navigate away from its current page.',
        image: code204,
        imageBefore: b204
    },
]

export { codes };