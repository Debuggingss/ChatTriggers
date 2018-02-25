package com.chattriggers.ctjs.utils.config;

import com.chattriggers.ctjs.minecraft.libs.ChatLib;
import com.chattriggers.ctjs.minecraft.libs.RenderLib;
import com.chattriggers.ctjs.minecraft.wrappers.Client;
import lombok.Setter;
import net.minecraft.client.gui.GuiTextField;

import java.io.File;

public class ConfigString extends ConfigOption {
    @Setter
    private String value = null;
    private transient String defaultValue;

    private transient GuiTextField textField;
    private transient long systemTime;
    @Setter
    private transient boolean isValid;
    @Setter
    private transient boolean isDirectory;

    ConfigString(String name, String defaultValue, int x, int y) {
        super(ConfigOption.Type.STRING);

        this.name = name;
        this.defaultValue = defaultValue;

        this.x = x;
        this.y = y;
        this.systemTime = Client.getSystemTime();
        this.isValid = true;
        this.isDirectory = false;
    }

    public String getValue() {
        if (value == null)
            return defaultValue;
        return value;
    }

    private void updateValidDirectory(String directory) {
        this.isValid = !this.isDirectory || new File(directory).isDirectory();
    }

    private String getIsValidColor() {
        if (this.isValid)
            return ChatLib.addColor("&a");
        return ChatLib.addColor("&c");
    }

    @Override
    public void init() {
        updateValidDirectory(getValue());
        this.textField = new GuiTextField(
                0,
                RenderLib.getFontRenderer(),
                RenderLib.getRenderWidth() / 2 - 100 + this.x,
                this.y + 15,
                200,
                20
        );
        this.textField.setMaxStringLength(100);
        this.textField.setText(getIsValidColor() + getValue());
    }

    @Override
    public void draw(int mouseX, int mouseY) {
        if (this.hidden) return;

        update();

        int middle = RenderLib.getRenderWidth() / 2;

        RenderLib.drawRectangle(0x80000000, middle - 105 + this.x, this.y - 5, 210, 45);
        RenderLib.drawString(this.name, middle - 100 + this.x, this.y);

        this.textField.drawTextBox();
    }

    private void update() {
        while (this.systemTime < Client.getSystemTime() + 50) {
            this.systemTime += 50;
            this.textField.updateCursorCounter();
        }
    }

    @Override
    public void mouseClicked(int mouseX, int mouseY, int mouseButton) {
        if (this.hidden) return;

        this.textField.mouseClicked(mouseX, mouseY, mouseButton);
    }

    @Override
    public void keyTyped(char typedChar, int keyCode) {
        if (this.textField.isFocused()) {
            this.textField.textboxKeyTyped(typedChar, keyCode);

            String text = ChatLib.removeFormatting(this.textField.getText());
            updateValidDirectory(text);
            this.textField.setText(getIsValidColor() + text);

            if (this.isValid)
                this.value = text;
        }
    }
}
