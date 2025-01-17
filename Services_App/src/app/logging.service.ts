export class LoggingService {
    logStatusChange(status: string) {
        console.log('Bank status changed, new status: ' + status);
    }

    logTypeChange(type: string) {
        console.log('Bank type changed, new type: ' + type);
    }
}