import React, { useState } from "react";
import { MenuList, MenuListItem, Separator, Button, AppBar } from "react95";

function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <AppBar style={{ padding: "3px" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: "bold" }}
          >
            Start
          </Button>
          {open && (
            <MenuList
              style={{
                position: "absolute",
                left: "0",
                top: "100%",
              }}
              onClick={() => setOpen(false)}
            >
              <MenuListItem>
                <span role="img" aria-label="👨‍💻">
                  👨‍💻
                </span>
                Profile
              </MenuListItem>
              <MenuListItem>
                <span role="img" aria-label="📁">
                  📁
                </span>
                My account
              </MenuListItem>
              <Separator />
              <MenuListItem disabled>
                <span role="img" aria-label="🔙">
                  🔙
                </span>
                Logout
              </MenuListItem>
            </MenuList>
          )}
        </div>
      </AppBar>
    </div>
  );
}

export default Nav;
