# Keybind Modes Extension

The Keybind Modes extension for Visual Studio Code allows you to create and manage custom keybinding modes. This enables you to switch between different sets of keybindings based on the active mode, providing a flexible and dynamic coding environment.

## Features

- **Toggle Keybind Modes:** Easily switch between different keybinding modes.
- **Custom Keybindings:** Define keybindings that are only active in specific modes.
- **Status Bar Integration:** Displays the current mode in the status bar.

## Installation

### From the Marketplace

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
3. Search for "Keybind Modes" and click Install.

### From a VSIX File

1. Download the `.vsix` file from the [Releases](#) page.
2. Open Visual Studio Code.
3. Go to the Extensions view (`Ctrl+Shift+X`).
4. Click on the `...` (More Actions) button in the top-right corner.
5. Select `Install from VSIX...` and choose the downloaded `.vsix` file.

## Usage

### Activating the Extension

The extension is activated the first time a command is executed. It provides two main commands:

- **Toggle Mode:** Switches between the default mode and a custom mode.
- **Clear Mode:** Resets to the default mode.

### Creating a New Keybinding Mode

To create a new keybinding mode, follow these steps:

1. **Define the Mode:**

   In your `keybindings.json`, define a keybinding that sets the mode using the `keybind-modes.toggle` command. For example:

   ```json
   {
     "key": "ctrl+alt+m",
     "command": "keybind-modes.toggle",
     "args": { "mode": "myCustomMode" }
   }
   ```

2. **Add Keybindings for the Mode:**

   Define keybindings that are only active when your custom mode is enabled. Use the `when` clause to specify the mode:

   ```json
   {
     "key": "n",
     "command": "workbench.action.files.newUntitledFile",
     "when": "mode == 'myCustomMode'"
   }
   ```

### Example

Here's an example of how to set up a custom mode and keybinding:

1. **Toggle to Custom Mode:**

   ```json
   {
     "key": "ctrl+alt+m",
     "command": "keybind-modes.toggle",
     "args": { "mode": "myCustomMode" }
   }
   ```

2. **Keybinding Active in Custom Mode:**

   ```json
   {
     "key": "n",
     "command": "workbench.action.files.newUntitledFile",
     "when": "mode == 'myCustomMode'"
   }
   ```

## Status Bar

The current mode is displayed in the status bar, allowing you to quickly see which mode is active.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This extension is licensed under the MIT License.
