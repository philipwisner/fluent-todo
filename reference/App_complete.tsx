import * as React from "react";
import { render } from "react-dom";
// import { PrimaryButton, initializeIcons } from "office-ui-fabric-react";
import {
  DefaultButton,
  PrimaryButton,
  ChoiceGroup,
  TextField,
  Toggle,
  ProgressIndicator,
  Checkbox,
  ContextualMenuItemType,
  Breadcrumb,
  initializeIcons,
  Text,
  Customizer
} from "office-ui-fabric-react";
import { FluentCustomizations } from "@uifabric/fluent-theme";

import "./index.css";

initializeIcons();

function App() {
  return (
    <div className="App">
      <Customizer {...FluentCustomizations}>
        <Text variant="xxLarge">Fluent Theme example</Text>
        <div
          style={{ marginBottom: 10, display: "flex", flexDirection: "row" }}
        >
          <div className="ms-themer-example">
            <TextField suffix="suffix" label="Standard" />
            <TextField label="Disabled" disabled={true} />
            <TextField label="Required " required={true} />
            <TextField
              label="With error message"
              errorMessage="Error message"
            />
          </div>
          <div className="ms-themer-example">
            <Toggle
              defaultChecked={true}
              label="Toggle"
              onText="On"
              offText="Off"
            />
            <ChoiceGroup
              options={[
                {
                  key: "A",
                  text: "Option A"
                },
                {
                  key: "B",
                  text: "Option B",
                  checked: true
                }
              ]}
              label="Pick one"
              required={true}
            />
            <ChoiceGroup
              options={[
                {
                  key: "C",
                  text: "Option C",
                  disabled: true
                },
                {
                  key: "D",
                  text: "Option D",
                  checked: true,
                  disabled: true
                }
              ]}
              label="Pick one"
              required={true}
            />
          </div>
          <div className="ms-themer-example spacing">
            <DefaultButton>Hello World</DefaultButton>
            <PrimaryButton>Hello World</PrimaryButton>
            <DefaultButton
              id="ContextualMenuBasicExample"
              text="Click for ContextualMenu"
              menuProps={{
                shouldFocusOnMount: true,
                items: [
                  {
                    key: "newItem",
                    text: "New",
                    onClick: () => console.log("New clicked")
                  },
                  {
                    key: "divider_1",
                    itemType: ContextualMenuItemType.Divider
                  },
                  {
                    key: "rename",
                    text: "Rename",
                    onClick: () => console.log("Rename clicked")
                  },
                  {
                    key: "disabled",
                    text: "Disabled item",
                    disabled: true,
                    onClick: () =>
                      console.error("Disabled item should not be clickable.")
                  }
                ]
              }}
            />
            <Checkbox label="Standard checkbox" />
            <Checkbox disabled label="Standard checkbox" />
            <Breadcrumb
              items={[
                {
                  text: "Files",
                  key: "Files",
                  onClick: _onBreadcrumbItemClicked
                },
                {
                  text: "This is folder 1",
                  key: "f1",
                  onClick: _onBreadcrumbItemClicked
                },
                {
                  text: "This is folder 2",
                  key: "f2",
                  onClick: _onBreadcrumbItemClicked
                },
                {
                  text: "This is folder 3",
                  key: "f3",
                  onClick: _onBreadcrumbItemClicked
                },
                {
                  text: "This is folder 4",
                  key: "f4",
                  onClick: _onBreadcrumbItemClicked
                },
                {
                  text: "This is folder 5",
                  key: "f5",
                  onClick: _onBreadcrumbItemClicked,
                  isCurrentItem: true
                }
              ]}
              // Returning undefined to OnReduceData tells the breadcrumb not to shrink
              onReduceData={() => undefined}
              maxDisplayedItems={3}
              ariaLabel={"Breadcrumb with static width"}
              overflowAriaLabel={"More items"}
            />
            <ProgressIndicator
              label="Example title"
              description="Example description"
              percentComplete={0.5}
            />
          </div>
        </div>
      </Customizer>
    </div>
  );
}

function _onBreadcrumbItemClicked() {
  console.log("Clicked");
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
