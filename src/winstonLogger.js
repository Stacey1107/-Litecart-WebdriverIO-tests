const winston = require('winston');

export const logger = winston.createLogger(
    {
        format: winston.format.combine(
            winston.format.label({ label: 'Right woof' }),
            winston.format.timestamp(),
            winston.format.prettyPrint()
        ),
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: 'artifacts/logs/app.log' })
        ]
    }
);

const customLogLevels = {
    levels: {
        marrakesh: 0,
        bali: 1,
        caboDaRocaSunset: 2
    },

    colors: {
        marrakesh: 'red',
        bali: 'green',
        caboDaRocaSunset: 'orange'
    }
}

logger.configure(
    {
        levels: customLogLevels.levels,
        transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: 'artifacts/logs/app.log', level: 'marrakesh' })
        ]
    }
)