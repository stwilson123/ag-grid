// Type definitions for @ag-grid-community/core v23.2.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { Beans } from "./beans";
import { CellComp } from "./cellComp";
import { RowNode } from "../entities/rowNode";
import { Column } from "../entities/column";
import { RowContainerComponent } from "./rowContainerComponent";
import { Component } from "../widgets/component";
import { IFrameworkOverrides } from "../interfaces/iFrameworkOverrides";
export declare class RowComp extends Component {
    static DOM_DATA_KEY_RENDERED_ROW: string;
    private static FULL_WIDTH_CELL_RENDERER;
    private static GROUP_ROW_RENDERER;
    private static GROUP_ROW_RENDERER_COMP_NAME;
    private static LOADING_CELL_RENDERER;
    private static LOADING_CELL_RENDERER_COMP_NAME;
    private static DETAIL_CELL_RENDERER;
    private static DETAIL_CELL_RENDERER_COMP_NAME;
    private readonly rowNode;
    private readonly beans;
    private ePinnedLeftRow;
    private ePinnedRightRow;
    private eBodyRow;
    private eAllRowContainers;
    private eFullWidthRow;
    private eFullWidthRowBody;
    private eFullWidthRowLeft;
    private eFullWidthRowRight;
    private readonly bodyContainerComp;
    private readonly fullWidthContainerComp;
    private readonly pinnedLeftContainerComp;
    private readonly pinnedRightContainerComp;
    private fullWidthRowComponent;
    private fullWidthRowComponentBody;
    private fullWidthRowComponentLeft;
    private fullWidthRowComponentRight;
    private firstRowOnPage;
    private lastRowOnPage;
    private active;
    private fullWidthRow;
    private editingRow;
    private rowFocused;
    private rowContainerReadyCount;
    private refreshNeeded;
    private columnRefreshPending;
    private cellComps;
    private createSecondPassFuncs;
    private removeFirstPassFuncs;
    private removeSecondPassFuncs;
    private fadeRowIn;
    private slideRowIn;
    private readonly useAnimationFrameForCreate;
    private rowIsEven;
    private paginationPage;
    private parentScope;
    private scope;
    private initialised;
    private elementOrderChanged;
    private lastMouseDownOnDragger;
    private readonly printLayout;
    private readonly embedFullWidth;
    constructor(parentScope: any, bodyContainerComp: RowContainerComponent, pinnedLeftContainerComp: RowContainerComponent, pinnedRightContainerComp: RowContainerComponent, fullWidthContainerComp: RowContainerComponent, rowNode: RowNode, beans: Beans, animateIn: boolean, useAnimationFrameForCreate: boolean, printLayout: boolean, embedFullWidth: boolean);
    init(): void;
    private createTemplate;
    getCellForCol(column: Column): HTMLElement;
    afterFlush(): void;
    private executeProcessRowPostCreateFunc;
    private getInitialRowTopStyle;
    private getRowBusinessKey;
    private areAllContainersReady;
    private lazyCreateCells;
    private createRowContainer;
    private createChildScopeOrNull;
    private setupRowContainers;
    private setupNormalRowContainers;
    private createFullWidthRows;
    private setAnimateFlags;
    isEditing(): boolean;
    stopRowEditing(cancel: boolean): void;
    isFullWidth(): boolean;
    refreshFullWidth(): boolean;
    private addListeners;
    private addListenersForCellComps;
    private onRowNodeDataChanged;
    private onRowNodeCellChanged;
    private postProcessCss;
    private onRowNodeHighlightChanged;
    private onRowNodeDraggingChanged;
    private postProcessRowDragging;
    private onExpandedChanged;
    private onDisplayedColumnsChanged;
    private destroyFullWidthComponents;
    private getContainerForCell;
    private onVirtualColumnsChanged;
    private onColumnResized;
    private refreshCells;
    private refreshCellsInAnimationFrame;
    private onColumnMoved;
    private removeRenderedCells;
    private isCellEligibleToBeRemoved;
    private ensureCellInCorrectContainer;
    private isCellInWrongRow;
    private insertCellsIntoContainer;
    private addDomData;
    private createNewCell;
    onMouseEvent(eventName: string, mouseEvent: MouseEvent): void;
    private createRowEvent;
    private createRowEventWithSource;
    private onRowDblClick;
    private onRowMouseDown;
    onRowClick(mouseEvent: MouseEvent): void;
    private createFullWidthRowContainer;
    private angular1Compile;
    private createFullWidthParams;
    private getInitialRowClasses;
    private isFirstRowOnPage;
    private isLastRowOnPage;
    private onModelUpdated;
    private preProcessRowClassRules;
    private processRowClassRules;
    stopEditing(cancel?: boolean): void;
    private setEditingRow;
    startRowEditing(keyPress?: number | null, charPress?: string | null, sourceRenderedCell?: CellComp | null): void;
    forEachCellComp(callback: (renderedCell: CellComp) => void): void;
    private postProcessClassesFromGridOptions;
    private postProcessRowClassRules;
    private processClassesFromGridOptions;
    private preProcessStylesFromGridOptions;
    private postProcessStylesFromGridOptions;
    private processStylesFromGridOptions;
    private createCells;
    private onRowSelected;
    private callAfterRowAttachedOnCells;
    private afterRowAttached;
    private addHoverFunctionality;
    private roundRowTopToBounds;
    protected getFrameworkOverrides(): IFrameworkOverrides;
    private onRowHeightChanged;
    addEventListener(eventType: string, listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    destroy(animate?: boolean): void;
    private destroyContainingCells;
    getAndClearDelayedDestroyFunctions(): Function[];
    private onCellFocusChanged;
    private onPaginationChanged;
    private onTopChanged;
    private applyPaginationOffset;
    private setRowTop;
    getAndClearNextVMTurnFunctions(): Function[];
    getRowNode(): RowNode;
    getRenderedCellForColumn(column: Column): CellComp | undefined;
    private onRowIndexChanged;
    private updateRowIndexes;
    ensureDomOrder(): void;
    getPinnedLeftRowElement(): HTMLElement;
    getPinnedRightRowElement(): HTMLElement;
    getBodyRowElement(): HTMLElement;
    getFullWidthRowElement(): HTMLElement;
}
