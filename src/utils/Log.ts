export class Log {
  private static _instance: Log;

  private static _msg: string = ""; 

  public static getInstance(): Log {
    if (Log._instance) {
      return Log._instance;
    }
    return new Log();
  }

  public static add(msg: string): void {
    Log._msg += msg + "\n";
  }

  public static show(): void {
    console.log(Log._msg);
  }

}