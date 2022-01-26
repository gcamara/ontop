/**
 * Represents the types of buttons.
 */
export enum ButtonType {
    REGULAR = 'regular',
    ROUNDED = 'rounded'
}

/**
 * Represents the colors of the buttons.
 * Default is pink.
 */
export enum ButtonColors {
    DEFAULT = 'default',
    GRAY = 'gray'
}

/**
 * Represents the user details.
 * Company name is a string to make the code simple.
 */
export interface OtpClient {
    id: string;
    name: string;
    profilePic?: string;
    companyName: string;
}

/**
 * Represents the menu.
 */
export interface Menu {
    title: string;
    path: string;
    icon?: string;
}

export interface Contractor {
    name: string;
    profilePic?: string;
    contractType: string;
    startDate: string;
    amount: number;
    status: string;
}