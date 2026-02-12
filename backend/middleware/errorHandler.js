const errorHandler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'server error';

    // mongoose bad objectid
    if(err.name == 'CastError'){
        message = "resource not found";
        statusCode = 404;
    }

    // mongoose duplicate key
    if(err.code == 11000){
        const field = Object.keys(err.keyValue)[0];
        message =  `${field} already exist`;
        statusCode = 400;
    }

    // mongoose validator error
    if(err.name == 'ValidationError'){
        message = Object.values(err.errors).map(val => val.message).join(', ');
        statusCode = 400;
    }

    // multer file size error
    if(err.code == 'LIMIT_FILE_SIZE'){
        message = 'file size exceeds the max limit of 10mb';
        statusCode = 400;
    }

    // jwt errors
    if(err.name == 'JsonWebTokenError'){
        message = 'Invalid TOken';
        statusCode = 401;
    }

    if(err.name == 'TokenExpiredError'){
        message = 'Token expired';
        statusCode = 401;
    }

    console.error('Error:', {
        message: err.message,
        stack: process.env.NODE_ENV == 'developement' ? err.stack : undefined
    });

    res.status(statusCode).json({
        success: false,
        error:message,
        statusCode,
        ...(process.env.NODE_ENV == 'development' && {stack:err.stack})
    });
};

export default errorHandler;