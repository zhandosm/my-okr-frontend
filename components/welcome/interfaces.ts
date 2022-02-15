export interface SubmitInterface {
    name: string;
    onSubmit: () => Promise<void>
}