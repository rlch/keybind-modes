// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const DEFAULT_MODE = 'default';
const MODE_KEY = 'mode';
let statusBarItem: vscode.StatusBarItem;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let log = vscode.window.createOutputChannel('Keybind Modes');
	const toggleID = 'keybind-modes.toggle';
	const clearID = 'keybind-modes.clear';

	statusBarItem = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 5);
	statusBarItem.command = clearID;

	function updateStatusBar(): void {
		const currentMode = context.globalState.get(MODE_KEY);
		statusBarItem.text = `[${currentMode || DEFAULT_MODE}]`;
		statusBarItem.show();
	}

	function updateMode(mode: string) {
		context.globalState.update(MODE_KEY, mode);
		vscode.commands.executeCommand('setContext', MODE_KEY, mode);
		if (mode === DEFAULT_MODE) {
			log.appendLine('Keybind mode cleared');
		} else {
			log.appendLine(`Keybind mode set to: ${mode}`);
		}
		updateStatusBar();
	}


	const toggleCmd = vscode.commands.registerCommand(toggleID, (args: { mode: string }) => {
		const mode = args.mode;
		if (!mode) {
			vscode.window.showErrorMessage('Invoke this command with a mode via keybind.');
			return;
		}
		const currentMode = context.globalState.get(MODE_KEY);
		const newMode = currentMode === mode ? DEFAULT_MODE : mode;
		console.log('currentMode', currentMode, 'req', mode, 'setting to', newMode);
		updateMode(newMode);
	});
	const clearCmd = vscode.commands.registerCommand(clearID, () => {
		updateMode(DEFAULT_MODE);
	});
	context.subscriptions.push(toggleCmd, clearCmd, statusBarItem);
	updateStatusBar();
}



// This method is called when your extension is deactivated
export function deactivate() { }
